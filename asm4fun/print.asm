.global _start

.text
_start:
	mov $text__len,%edx
	mov $text,%ecx
	mov $1,%ebx
	mov $4,%eax

	int $0x80

	mov $0,%ebx
	mov $1,%eax
	int $0x80

.data

text:	
	.ascii "Hello, world!\n"
	text__len = . - text
