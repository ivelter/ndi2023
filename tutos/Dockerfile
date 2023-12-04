FROM archlinux:base

# Une image rapide et efficace à build

RUN pacman --noconfirm -Sy wget
RUN wget https://github.com/typst/typst/releases/download/v0.9.0/typst-x86_64-unknown-linux-musl.tar.xz
RUN tar xvf typst-x86_64-unknown-linux-musl.tar.xz
RUN mv typst-x86_64-unknown-linux-musl/typst /usr/bin

WORKDIR /app

ENTRYPOINT [ "typst", "w", "tuto.typ" ]