import { useState } from "react";

import { BinaryTreeType, ValueType } from "../types/binaryTree";

const useBinaryTree = () => {
  const [binaryTree, setBinaryTree] = useState<BinaryTreeType>(null);

  const createNode = (value: ValueType): BinaryTreeType => ({
    value,
    children: [null, null],
  });

  const getNewTree = (tree: BinaryTreeType, newValue: ValueType) => {
    if (!tree) return tree;

    let node =  { ...tree };

    if (node.value > newValue) {
      node.children[0] = node.children[0] ? getNewTree(node.children[0], newValue) : createNode(newValue);
    } else {
      node.children[1] = node.children[1] ? getNewTree(node.children[1], newValue) : createNode(newValue);
    }

    return node;
  };

  const addNewNode = (newValue: ValueType) => {
    binaryTree
      ? setBinaryTree(getNewTree(binaryTree, newValue))
      : setBinaryTree(createNode(newValue));
  };

  return {
    binaryTree,
    addNewNode,
  };
};

export default useBinaryTree;
