# Image Bench
On my way to write a [media proxy service](https://github.com/squirrelchat/leaf), I did some research work to find
out the most efficient way to resize an image (given that I am a dumb girl, translate this to "what's the fastest lib").
And I was left with this very unpleasant conclusion that apparently efficient software is an unpopular opinion.

I'm obviously exaggerating here, but it was extremely hard to find a lib that would satisfy me and that I was willing
to use. So I decided to make this thing.

## What is this?
This project measures the performances of as many libs as possible, and aggregate all this data in a nice chart that
you can (soon) see for yourself at https://image-bench.cynthia.dev.

I also want to track the evolution of image resize, and maybe give motivation to some folks out there to make their
libs faster 🚀

## What is benchmarked?

## But benchmark for X is unfair!
If you feel the results for a specific library are biased because of some mistakes in the code used for benchmarking,
feel free to open an issue and/or a PR!

## Will you add *that* lib?
Why not! If you want to see a new lib added to the benchmark, file an issue and I (or a very kind contributor) will
look into it.

## License?
The benchmarking code is available under the [BSD-3-Clause](LICENSE) license. The results I'm making available are
provided under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.
