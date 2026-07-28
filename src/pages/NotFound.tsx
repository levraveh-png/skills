import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noIndex
      />
      <div className="container flex min-h-[70vh] flex-col items-start justify-center py-20">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] text-ink">
          This page didn't make it.
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
          The page you're looking for may have moved or the link's out of
          date. Let's get you back to solid ground.
        </p>
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
          <Button asChild size="lg" variant="primary">
            <Link to="/">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={business.phone.href}>
              <Phone className="h-4 w-4 text-copper-500" />
              {business.phone.display}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
