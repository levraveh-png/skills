import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border">
      <ol className="container flex flex-wrap items-center gap-1.5 py-3 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-copper-600">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-copper-600">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
