export interface CartServer {
  connect(callback?: Function);
  disconnect(callback?: Function);
  execute(command: string);
}