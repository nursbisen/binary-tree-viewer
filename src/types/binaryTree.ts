export type ValueType = number;

export type BinaryTreeType = {
  value: ValueType;
  children: [BinaryTreeType, BinaryTreeType];
} | null;
