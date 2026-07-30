import {
  uitripledRegistry,
  uitripledById,
  uitripledCategories,
  type UitripledRegistryItem,
} from "@openpages/uitripled/registry";
import {
  reuiRegistry,
  reuiById,
  reuiCategories,
  type ReuiRegistryItem,
} from "@openpages/reui/registry";

export type BlockRegistryItem = UitripledRegistryItem | ReuiRegistryItem;

/** UITripled + ReUI free catalog. */
export const blocksRegistry: BlockRegistryItem[] = [
  ...uitripledRegistry,
  ...reuiRegistry,
];

export const blockCategories = [
  ...new Set([...uitripledCategories, ...reuiCategories]),
] as string[];

export function findBlock(id: string) {
  return uitripledById[id] ?? reuiById[id] ?? blocksRegistry.find((b) => b.id === id);
}

export { uitripledById, uitripledCategories, reuiById, reuiCategories };
