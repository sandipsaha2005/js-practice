# Windows

deno compile --target x86_64-pc-windows-msvc hello.ts

# Mac

deno compile --target x86_64-apple-darwin hello.ts

# Linux

deno compile --target x86_64-unknown-linux-gnu hello.ts

deno compile\
--allow-net\
--allow-read\
--allow-env\
--target x86_64-apple-darwin \

--output myapp\
main.ts
