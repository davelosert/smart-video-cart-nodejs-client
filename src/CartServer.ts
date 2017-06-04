export interface TCPCartServer {
  connect(callback?: Function);
  disconnect(callback?: Function);
  execute(command: string);
}