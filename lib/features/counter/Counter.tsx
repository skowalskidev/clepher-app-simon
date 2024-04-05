'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'

import { decrement, increment, selectCount } from './counterSlice'

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    // omit rendering logic
    return (
        <div>
            <div>
                <button
                    className='btn btn-primary'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <span>{count}</span>
                <button
                    className='btn btn-primary'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
        </div>
    )
}