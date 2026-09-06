```
/* ************************************************************************** */
/*                                                                            */
/*   ██████╗  █████╗ ██╗ ██████╗                                              */
/*  ██╔════╝ ██╔══██╗██║██╔═══██╗                                             */
/*  ██║      ███████║██║██║   ██║                                             */
/*  ██║      ██╔══██║██║██║   ██║                                             */
/*  ╚██████╗ ██║  ██║██║╚██████╔╝                                             */
/*   ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝                                              */
/*                                                                            */
/*                                                                            */
/* ************************************************************************** */

/* ************************************************************************** */
/*                                                                            */
/*  ██████╗  ██╗  ██╗ ██████╗                                                 */
/*  ██╔══██╗ ██║  ██║ ██╔══██╗                                                */
/*  ██████╔╝ ███████║ ██████╔╝                                                */
/*  ██╔═══╝  ██╔══██║ ██╔═══╝                                                 */
/*  ██║      ██║  ██║ ██║                                                     */
/*  ╚═╝      ╚═╝  ╚═╝ ╚═╝                                                     */
/*                                                                            */
/*                                                                            */
/* ************************************************************************** */
```
# `ft_strncpy`

Reimplementação da `strncpy` da libc: copia até `n` caracteres de `src` para `dest`, preenchendo com `'\0'` o espaço que sobrar caso `src` seja mais curta que `n`.

## Implementação

```c
char	*ft_strncpy(char *dest, char *src, unsigned int n)
{
	int unsigned	i;

	i = 0;
	while (i < n && src[i] != 0)
	{
		dest[i] = src[i];
		i++;
	}
	while (i < n)
	{
		dest[i] = '\0';
		i++;
	}
	return (dest);
}
```

## Como funciona

- **1º `while`** — copia caracteres de `src` para `dest` enquanto não chegar a `n` **e** não encontrar o `'\0'` de `src`.
- **2º `while`** — se `src` acabou antes de `n`, preenche o resto de `dest` (até à posição `n`) com `'\0'`.
- Se `n` for `0`, nenhum dos dois loops corre e `dest` sai inalterado.
- Devolve sempre `dest`, tal como a `strncpy` original.

## Compilar

```bash
cc -Wall -Wextra -Werror ft_strncpy.c
```

## Testes

| Comando | `word1` | `word2` | `n` |
|---|---|---|---|
| `./a.out abcde world 3` | `abcde` | `world` | `3` |
| `./a.out abcdef hello 5` | `abcdef` | `hello` | `5` |
| `./a.out abcdefgh hi 5` | `abcdefgh` | `hi` | `5` |
| `./a.out teste hello 0` | `teste` | `hello` | `0` |

Saída real de cada um (compilado com as flags acima e usando o `main` de teste abaixo):

```
$ ./a.out abcde world 3
Array 1: abcde
Array 2: world
Array 1: worde
Array 2: world

$ ./a.out abcdef hello 5
Array 1: abcdef
Array 2: hello
Array 1: hellof
Array 2: hello

$ ./a.out abcdefgh hi 5
Array 1: abcdefgh
Array 2: hi
Array 1: hi
Array 2: hi

$ ./a.out teste hello 0
Array 1: teste
Array 2: hello
Array 1: teste
Array 2: hello
```

## Programa de teste (`main`)

Este `main` lê `word1`, `word2` e `n` da linha de comandos, copia-os para dois arrays locais e chama `ft_strncpy(dest, src, n)`. Está comentado no ficheiro original — descomenta-o (ou copia para um ficheiro à parte) para poderes correr os testes acima.

```c
#include <stdlib.h>
#include <stdio.h>

int	main(int argc, char *argv[])
{
	if (argc != 4)
	{
		printf("Use: %s <word1> <word2> <number>\n", argv[0]);
		return (1);
	}
	int i = 0; // tamanho do array 1
	int j = 0; // tamanho do array 2
	int k = 0;
	int l = 0;
	while (argv[1][i] != '\0' || argv[2][j] != '\0')
	{
		if (argv[1][i] != '\0')
			i++;
		if (argv[2][j] != '\0')
			j++;
	}
	i++; // +1 por causa do \0
	j++;
	char arr1[i];
	char arr2[j];
	char *dest = arr1;
	char *src = arr2;
	int unsigned n = atoi(argv[3]);
	while (k < i || l < j)
	{
		if (argv[1][k] != '\0')
		{
			arr1[k] = argv[1][k];
			k++;
		}
		else if (argv[2][l] != '\0')
		{
			arr2[l] = argv[2][l];
			l++;
		}
		else if (k == i - 1 && l == j - 1)
		{
			arr1[k] = '\0';
			arr2[l] = '\0';
			break ;
		}
	}
	printf("Array 1: %s\n", dest);
	printf("Array 2: %s\n", src);
	ft_strncpy(dest, src, n);
	printf("Array 1: %s\n", dest);
	printf("Array 2: %s\n", src);
	return (0);
}
```

> **Nota:** o tamanho de `arr1` (e portanto de `dest`) é calculado a partir do comprimento de `word1`, não de `n`. Se passares um `n` maior do que `strlen(word1) + 1`, o `ft_strncpy` vai escrever fora dos limites do array — não é um problema da função em si, mas sim deste `main` de teste.
