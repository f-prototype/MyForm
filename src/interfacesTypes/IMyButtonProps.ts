export interface IMyButtonProps {
  id?: string;
  func?: (e?: any) => void;
  className: 'back' | 'next';
  text: string;
}
