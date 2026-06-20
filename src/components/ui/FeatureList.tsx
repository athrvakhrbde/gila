import { Icon } from "./Icon";

export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item} className="feature-list-item">
          <Icon name="check" size={16} className="feature-list-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
