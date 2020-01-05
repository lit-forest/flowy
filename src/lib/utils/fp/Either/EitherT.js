import { Left, Right, either } from './index'

export const EitherT = M => {
    const Monad = runEitherT => ({
        runEitherT,
        chain: f =>
            Monad(runEitherT.chain(
                either(
                    x => M.of(() => Left(x)),
                    x => f(x).runEitherT
                )))
    })

    Monad.of = x => Monad(M.of(Right(x)))

    return Monad
}

export const runEitherT = m => m.runEitherT