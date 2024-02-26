export function findNum(nums: number[]): number {
  let map = new Map<number, boolean>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return nums[i];
    map.set(nums[i], true);
  }
  return -1;
}
export function cancelableP<T = Promise<any>>(p: T): [Function, T] {
  let abort: any;
  const raceP = new Promise((resolve, reject) => {
    abort = reject;
  });

  return [
    abort as (reason?: any) => void,
    Promise.race([p, raceP]) as any,
  ];
}

export function cancellable<T>(
  generator: Generator<any, T, unknown>
): [() => void, Promise<T>] {
  let cancel = false;
  function dfs(node) {
    if (node.done) return Promise.resolve(node.value);
    if (node.value instanceof Promise) {
      return node.value.then(
        (res) =>
          dfs(
            cancel
              ? generator.throw('Cancelled')
              : generator.next(res)
          ),
        (res) => dfs(generator.throw(res))
      );
    } else {
      return dfs(generator.next(node.value));
    }
  }
  return [
    () => {
      cancel = true;
    },
    new Promise((resolve, reject) =>
      dfs(generator.next()).then(resolve, reject)
    ),
  ];
}
