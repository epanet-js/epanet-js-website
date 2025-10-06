import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What our users are saying
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from hydraulic engineers and water professionals who use
              epanet-js every day.
            </p>
          </div>
        </div>

        <div className="grid gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Dr. Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Senior Hydraulic Engineer, WaterTech Solutions
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "epanet-js has completely transformed our workflow. The
                  ability to model networks directly in the browser without
                  installing software has saved us countless hours. The
                  interface is intuitive and the local-first approach gives us
                  peace of mind about data security."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                  />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Michael Smith</h3>
                  <p className="text-sm text-muted-foreground">
                    Water Resources Manager, City of Riverdale
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "As someone who manages municipal water systems, I appreciate
                  how epanet-js makes it easy to visualize pressure and flow
                  data. The shortcuts and intuitive interface have made our
                  modeling process much more efficient. Highly recommended for
                  any water utility."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                  />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Prof. Alicia Patel</h3>
                  <p className="text-sm text-muted-foreground">
                    Associate Professor, University of Hydroscience
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "epanet-js has been a game-changer for teaching hydraulic
                  modeling to my students. The web-based interface means no
                  complicated software installation, and students can access
                  their work from any computer. The educational license makes it
                  accessible for academic institutions."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 4 */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                  />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Robert Johnson</h3>
                  <p className="text-sm text-muted-foreground">
                    Principal Engineer, AquaFlow Consultants
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "I've been using EPANET for over 15 years, and epanet-js is a
                  breath of fresh air. The familiar functionality with modern
                  improvements makes it my go-to tool for water distribution
                  modeling. The local-first approach is perfect for our
                  confidential client projects."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 5 */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                  />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Sarah Lee</h3>
                  <p className="text-sm text-muted-foreground">
                    Water Systems Analyst, Global Water Partners
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "The interactive map-based editing in epanet-js has
                  revolutionized how we design water networks. Being able to
                  visualize the network on a map while making changes has
                  improved our accuracy and efficiency. The team behind it
                  clearly understands what hydraulic modelers need."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 6 */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                  />
                  <AvatarFallback>DM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h3 className="font-semibold">David Martinez</h3>
                  <p className="text-sm text-muted-foreground">
                    Infrastructure Director, Clearwater Utilities
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "As someone responsible for critical infrastructure, I
                  appreciate how epanet-js combines powerful simulation
                  capabilities with ease of use. The fact that it's open source
                  gives me confidence in its longevity and continuous
                  improvement. It's become an essential tool for our planning
                  department."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
