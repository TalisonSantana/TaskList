export default interface ITask {
  id: number;
  name: string;
  description: string;
  inProgress: boolean | string;
}