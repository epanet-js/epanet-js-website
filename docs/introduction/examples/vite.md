Below is a step-by-step tutorial to help you get started with **epanet-js** in a new **React + Vite + TypeScript** application. By the end, you’ll have a small web app that lets you:

- Load an EPANET `.inp` file from your computer.
- Run a hydraulic simulation in the browser using **epanet-js**.
- Display the generated report in a read-only text area.

This tutorial assumes:

- You have some familiarity with React and TypeScript.
- You know basic npm commands, and have Node.js and npm installed.

We’ll build this incrementally in four steps, starting from a fresh React + Vite + TypeScript scaffold.

---

### Step 1: Create a New React + Vite + TypeScript App

First, create and run your new Vite project with React and TypeScript:

```bash
npm create vite@latest my-first-epanet-js-app -- --template react-ts
cd my-first-epanet-js-app
npm install epanet-js
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You’ll see the default Vite + React starter page.

Open the project in your code editor:

```bash
code .
```

**Replace `src/App.tsx` with a simple scaffold:**  
We’ll start with a very basic UI to verify our setup. Remove all existing code in `src/App.tsx` and replace it with this minimal code:

```react
import React from "react";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>EPANET-js React Example</h1>
      <p>This is the start of our EPANET-js app.</p>
      <p>
        In later steps, we’ll load an INP file, run a simulation, and show the
        report here.
      </p>
    </div>
  );
}

export default App;
```

**Check your app:**  
Go back to the browser and ensure it’s still running on [http://localhost:5173](http://localhost:5173). You should see the new heading and text. That’s it for step one! We have our scaffold in place.

---

### Step 2: Handling the INP File

Now, let’s let users select an EPANET `.inp` file from their computer. When they pick a file, we’ll read it and just show the file’s text in a "report" area, proving we can handle file input.

**Update `src/App.tsx` to add file selection:**

```react
import React, { useState } from "react";

function App() {
  const [inpContent, setInpContent] = useState<string>("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setInpContent(text);
    };
    reader.readAsText(file);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>EPANET-js React Example</h1>
      <p>Select an INP file to display its content:</p>

      <input
        type="file"
        accept=".inp"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />

      <h2>File Content</h2>
      <textarea
        readOnly
        value={inpContent}
        style={{ width: "100%", height: "300px", marginTop: "10px" }}
      />
    </div>
  );
}

export default App;
```

**Test it out:**

1. Save the file.
2. Go to your browser and click "Choose File."
3. Select an `.inp` file from your computer.
4. You should see the content of the `.inp` file displayed in the text area.

Great! We can now load files from the user’s computer.

---

### Step 3: Running the Hydraulic Simulation

Now we’ll integrate **epanet-js**. We will:

- Run the hydraulic simulation steps in the browser (no server needed!).
- After finishing the simulation, we’ll just display a success message.

Before we finalize, let’s explain the hydraulic simulation loop briefly:

**Hydraulic Simulation Overview:**

1. **openH()**: Open hydraulics.
2. **initH()**: Initialize hydraulics.
3. **runH()** + **nextH()** in a loop until no more hydraulic steps remain.
4. **closeH()**: Close hydraulics.

This simulates the hydraulic conditions of the network over time.

**Update `src/App.tsx` to run the simulation:**

```react
import React, { useState } from "react";
import { Project, Workspace, InitHydOption } from "epanet-js";

function App() {
  const [inpContent, setInpContent] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setInpContent(text);
      setStatusMessage("");
    };
    reader.readAsText(file);
  }

  async function runModel(inpText: string) {
    // Create a new workspace and project instance
    const ws = new Workspace();
    const model = new Project(ws);

    // Write the inp file content into the in-memory file system
    ws.writeFile("model.inp", inpText);

    // Now run the hydraulic simulation
    model.open("model.inp", "report.rpt", "out.bin");
    model.openH();
    model.initH(InitHydOption.SaveAndInit);

    let tStep = Infinity;
    do {
      model.runH();
      tStep = model.nextH();
    } while (tStep > 0);

    model.closeH();
    model.close();

    // At this point, the simulation is complete
    setStatusMessage("Simulation complete!");
  }

  function handleRunClick() {
    if (!inpContent) {
      alert("Please load an INP file first.");
      return;
    }
    setStatusMessage("Running simulation...");
    runModel(inpContent);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>EPANET-js React Example</h1>
      <p>Select an INP file, then click "Run Model" to run the simulation.</p>

      <input
        type="file"
        accept=".inp"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />

      <br />
      <button onClick={handleRunClick} disabled={!inpContent}>
        Run Model
      </button>

      <h2>Status</h2>
      <p>{statusMessage}</p>
    </div>
  );
}

export default App;
```

**Test it out:**

1. Select your `.inp` file.
2. Click "Run Model."
3. You should see "Running simulation..." and then after a moment "Simulation complete!" (The complexity of the simulation depends on the network; for a small network, it should be almost instantaneous.)

---

### Step 4: Displaying the Generated Report

Now we’ll read the **report file** generated by the simulation. When we run the model, `epanet-js` writes `report.rpt` into the in-memory file system. We can read it and then display it in the text area.

We’ll replace the "File Content" text area with the actual "Report" after the simulation runs. Also, we’ll add a `try/catch` block to handle errors gracefully. If something goes wrong, we’ll close the model and show an error message.

**Update `src/App.tsx` again:**

```react
import React, { useState } from "react";
import { Project, Workspace, InitHydOption } from "epanet-js";

function App() {
  const [inpContent, setInpContent] = useState<string>("");
  const [report, setReport] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setInpContent(text);
      setReport("");
      setStatusMessage("");
    };
    reader.readAsText(file);
  }

  async function runModel(inpText: string) {
    const ws = new Workspace();
    const model = new Project(ws);

    ws.writeFile("model.inp", inpText);

    try {
      model.open("model.inp", "report.rpt", "out.bin");
      model.openH();
      model.initH(InitHydOption.SaveAndInit);

      let tStep = Infinity;
      do {
        model.runH();
        tStep = model.nextH();
      } while (tStep > 0);

      model.closeH();
      model.close();

      // Now read the report
      const reportText = ws.readFile("report.rpt", "utf8");
      setReport(reportText);
      setStatusMessage("Simulation complete! Report generated below.");
    } catch (error) {
      console.error("Error running model:", error);
      model.close(); // Ensure we close if an error occurred
      setStatusMessage("Error running model. See console for details.");
    }
  }

  function handleRunClick() {
    if (!inpContent) {
      alert("Please load an INP file first.");
      return;
    }
    setStatusMessage("Running simulation...");
    setReport("");
    runModel(inpContent);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>EPANET-js React Example</h1>
      <p>
        Select an INP file, then click "Run Model" to run the simulation and
        show the report.
      </p>

      <input
        type="file"
        accept=".inp"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />

      <br />
      <button onClick={handleRunClick} disabled={!inpContent}>
        Run Model
      </button>

      <h2>Status</h2>
      <p>{statusMessage}</p>

      <h2>Report</h2>
      <textarea
        readOnly
        value={report}
        style={{ width: "100%", height: "300px", marginTop: "10px" }}
      />
    </div>
  );
}

export default App;
```

**Test one last time:**

1. Load the `.inp` file.
2. Click "Run Model".
3. After a moment, you should see "Simulation complete! Report generated below."
4. The `textarea` now shows the generated EPANET report.

If the simulation fails for any reason, the `catch` block will handle the error, ensure the model is closed, and display an error message.

---

### Wrap Up

You’ve now:

1. Created a React + Vite + TS project.
2. Loaded an `.inp` file from your computer.
3. Run an EPANET hydraulic simulation entirely in the browser using **epanet-js**.
4. Displayed the resulting `report.rpt` file in a read-only text box.
5. Added error handling to gracefully manage failures.

This basic template should give you a solid starting point for building more complex EPANET-based applications in a web environment. From here, you can explore different EPANET APIs to get node pressures, tank levels, run water quality analyses, and more!

Good luck with your EPANET-js journey!
