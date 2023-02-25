import { RawNodeDatum } from "react-d3-tree/lib/types/types/common";
import { BinaryTreeType } from "../types/binaryTree";

export const getPlusOrMinus = () => Math.random() < 0.5 ? -1 : 1;

export const getRandomNum = () => Math.round(Math.random() * 100) * getPlusOrMinus();

export const binaryTreeToTreeViewer = (binaryTree: BinaryTreeType) => {
  let reactTree: RawNodeDatum = { name: '' };

  if (binaryTree) {
    reactTree = {
      name: binaryTree.value.toString(),
      children: [],
    };

    reactTree.children?.push(binaryTreeToTreeViewer(binaryTree.children[0]));
    reactTree.children?.push(binaryTreeToTreeViewer(binaryTree.children[1]));
  }

  return reactTree;
};
