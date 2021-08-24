import get from "lodash.get";

export default ({ getState }: { getState: any }) =>
  (next: any) =>
  (action: any) => {
    const result = next(action);
    const { type, payload } = result;

    return result;
  };
