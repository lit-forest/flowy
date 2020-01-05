import IO from '../IO'
import Either from '../Either'
import { EitherT, runEitherT } from '../Either/EitherT'

export const EitherIO = EitherT(IO)

export const liftEither = m => EitherIO(IO.of(m))

export const liftIO = m => EitherIO(m.map(Either.Right))

export const runEitherIO = m => runEitherT(m).run()