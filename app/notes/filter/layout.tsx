// import type { ReactNode } from "react";

// type FilterLayoutProps = {
//   children: ReactNode;
//   sidebar: ReactNode;
// };

// export default function FilterLayout({ children, sidebar }: FilterLayoutProps) {
//   return (
//     <div>
//       {" "}
//       <aside>{sidebar}</aside> <section>{children}</section>{" "}
//     </div>
//   );
// }

import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

type FilterLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

export default function FilterLayout({ children, sidebar }: FilterLayoutProps) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.notesWrapper}>{children}</section>
    </div>
  );
}
