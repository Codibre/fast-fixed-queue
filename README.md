[![Actions Status](https://github.com/Codibre/fast-fixed-queue/workflows/build/badge.svg)](https://github.com/Codibre/fast-fixed-queue/actions)
[![Actions Status](https://github.com/Codibre/fast-fixed-queue/workflows/test/badge.svg)](https://github.com/Codibre/fast-fixed-queue/actions)
[![Actions Status](https://github.com/Codibre/fast-fixed-queue/workflows/lint/badge.svg)](https://github.com/Codibre/fast-fixed-queue/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b7a78073d7573098e8ba/test_coverage)](https://codeclimate.com/github/Codibre/fast-fixed-queue/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/b7a78073d7573098e8ba/maintainability)](https://codeclimate.com/github/Codibre/fast-fixed-queue/maintainability)
[![Packages](https://david-dm.org/Codibre/fast-fixed-queue.svg)](https://david-dm.org/Codibre/fast-fixed-queue)
[![npm version](https://badge.fury.io/js/fast-fixed-queue.svg)](https://badge.fury.io/js/fast-fixed-queue)

This is not a code created by me, I just extracted it directly from [node core](https://github.com/nodejs/node/blob/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/lib/internal/fixed_queue.js), as this class in particular is not exported, so I can use it on my own solutions.
I did this because this queue implementation showed a really good performance over simpler ones.

## How to Install

```
npm i fast-fixed-queue
```

## How to use it

Instantiate it:

```ts
const queue = new FastFixedQueue<TheItemTypeYouWant>();
```

Enqueue items using **push**:

```ts
queue.push(newItem)
```

Dequeue items using **shift**:

```ts
const olderItem = queue.shift();
```

This implementation doesn't have a built in method to determine the queue size, but you can check if it's empty using **isEmpty**:

```ts
while (!queue.isEmpty()) {
    console.log(queue.shift());
}
```

## Is it worth it to use it?

Well, mostly yes. According to our tests, it starts to worth to use for queues with more than around 408 items enqueued, otherwise stick with an array.

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
