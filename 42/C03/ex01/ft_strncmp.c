/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncmp.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: marvin <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/09/06 20:13:22 by ctrzecik          #+#    #+#             */
/*   Updated: 2026/09/08 15:24:25 by marvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_strncmp(char *s1, char *s2, unsigned int n)
{
	unsigned int	i;

	if (n == 0)
		return (0);
	i = 0;
	while ((i < (n - 1)
			&& s1[i] != '\0')
		&& s1[i] == s2[i])
	{
		i++;
	}
	return (s1[i] - s2[i]);
}

//#include <stdio.h>
// int main()
// {
// 	char arr1[] = "Teste";
// 	char arr2[] = "Testf";
// 	unsigned int n = 4;
// 	int n2 = ft_strncmp(arr1, arr2, n);
// 	printf("Result: %d", n2);
// }