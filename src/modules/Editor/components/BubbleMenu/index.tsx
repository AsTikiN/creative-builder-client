import { Editor, BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";

export const BubbleMenu = ({ editor }: { editor: Editor }) => {
  return <TipTapBubbleMenu editor={editor}>BubbleMenu</TipTapBubbleMenu>;
};
