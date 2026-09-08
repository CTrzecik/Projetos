/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcmp.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ctrzecik <ctrzecik@student.42lisboa.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/09/06 16:36:06 by ctrzecik          #+#    #+#             */
/*   Updated: 2026/09/07 17:57:20 by ctrzecik         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//retorna o valos ASCII
int	ft_strcmp(char *s1, char *s2)
{
	int	i;

	i = 0;
	while (s1[i] == s2[i] && s1[i] != '\0')
		i++;
	return (s1[i] - s2[i]);
}

// #include <stdio.h>
// int main()
// {
// 	char arr1[] = "testd";
// 	char arr2[] = "teste";
// 	int n = ft_strcmp(arr1, arr2);
// 	printf("Array1 : %s\n", arr1);
// 	printf("Array2 : %s", arr2);
// 	printf("\n\nDiferent chars: %d", n);
// }