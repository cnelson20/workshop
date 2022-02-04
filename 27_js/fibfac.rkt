#lang racket

(define fib
  (lambda (n)
    (if (<= n 1)
        n
        (+ (fib (- n 1))
           (fib (- n 2))
           )
        )
    )
  )

(define fact
  (lambda (n)
    (if (= n 0)
        1
        (* n (fact (- n 1)))
        )
    )
  )

(define iota
  (lambda (n)
    (if (= n 0)
        (list)
        (append (iota (- n 1))
                (list n)
                )
        )
    )
  )