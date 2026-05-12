import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { useEditMode } from "./EditMode";

interface Props {
  id: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
  multiline?: boolean;
}

/**
 * Inline-editable text block. When edit mode is on, hovering shows a pencil
 * cue and clicking turns the element into a contentEditable. Saves to
 * localStorage under `edit:<id>` and restores on subsequent loads.
 */
export function Editable({ id, as: Tag = "div", className = "", children, multiline = true }: Props) {
  const { editing } = useEditMode();
  const ref = useRef<HTMLElement | null>(null);
  const [storedHtml, setStoredHtml] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const storageKey = `edit:${id}`;

  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey);
      if (v != null) setStoredHtml(v);
    } catch {}
    setHydrated(true);
  }, [storageKey]);

  const save = () => {
    if (!ref.current) return;
    const html = ref.current.innerHTML;
    try {
      localStorage.setItem(storageKey, html);
    } catch {}
    setStoredHtml(html);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
    if (e.key === "Escape") (e.target as HTMLElement).blur();
  };

  const editingClasses = editing
    ? "outline-dashed outline-1 outline-offset-4 outline-amber/40 hover:outline-amber focus:outline-amber focus:outline-2 cursor-text rounded-sm transition relative"
    : "";

  // Render stored HTML if available; otherwise fall back to children.
  const content =
    hydrated && storedHtml != null ? (
      <span dangerouslySetInnerHTML={{ __html: storedHtml }} />
    ) : (
      children
    );

  return (
    <Tag
      ref={ref as never}
      className={`${className} ${editingClasses}`.trim()}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={save}
      onKeyDown={handleKey}
      data-edit-id={id}
    >
      {content}
    </Tag>
  );
}
