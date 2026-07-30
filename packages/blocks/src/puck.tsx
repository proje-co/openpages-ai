import {
  BLOCK_CATALOG,
  createDefaultBlock,
  type Block,
  type BlockType,
} from "@openpages/document-schema";
import { BlockView } from "./BlockView";

/** Minimal Puck-compatible config shaped for @measured/puck */
export const puckConfig = {
  components: Object.fromEntries(
    BLOCK_CATALOG.map((entry) => [
      entry.type,
      {
        label: entry.label,
        render: (props: Block) => <BlockView block={props} />,
        defaultProps: createDefaultBlock(entry.type as BlockType),
      },
    ]),
  ),
};

export function documentToPuckData(blocks: Block[]) {
  return {
    content: blocks.map((block) => ({
      type: block.type,
      props: block,
    })),
    root: { props: {} },
  };
}

export function puckDataToBlocks(data: {
  content?: Array<{ type: string; props: Block }>;
}): Block[] {
  return (data.content ?? []).map((item) => item.props);
}
