
# Helidon Documentation Project

This project contains an [mdBook](https://github.com/rust-lang/mdBook/) project
for Helidon Documentation.

## To build docs

1. Install mdbook (`brew install mdbook`)
2. `mdbook serve`

## mdbook-pagetoc

This project uses the [mdbook-pagetoc](https://github.com/slowsage/mdbook-pagetoc) plugin.
For Linux and Windows you can download the binary from the GitHub release page. 
Then add it to your path.

For MacOS you must build it:

1. `brew install rust`
2. `git clone https://github.com/slowsage/mdbook-pagetoc`
3. `git checkout tags/0.3.0`
4. `cargo install`
5. Add `${HOME}/.cargo/bin` to your PATH

