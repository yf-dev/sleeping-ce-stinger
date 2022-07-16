# OBS Stinger for SleepingCE

## Commands

**Start Preview**

```console
docker-compose up
```

http://localhost:3000/

**Render video**

```console
docker-compose run --rm remotion npm run build
```

**Render video with custom bg**

```console
docker-compose run --rm remotion sh
npx remotion render src/index.tsx Transition out/bg-1.mov --pixel-format=yuva444p10le --codec=prores --prores-profile=4444 --props='{"bg": "bg-1.png"}'
exit
```

## License

MIT license

Notice that for some entities of [remotion](https://github.com/remotion-dev/remotion) a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).