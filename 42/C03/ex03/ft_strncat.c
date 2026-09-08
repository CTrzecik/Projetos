/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ctrzecik <ctrzecik@student.42lisboa.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/09/07 13:25:03 by ctrzecik          #+#    #+#             */
/*   Updated: 2026/09/07 18:11:29 by ctrzecik         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

char	*ft_strncat(char *dest, char *src, unsigned int nb)
{
	unsigned int	j;
	int				i;

	i = 0;
	j = 0;
	while (dest[i] != '\0')
	{
		i++;
	}
	while (j < nb && src[j] != '\0')
	{
		dest[i + j] = src[j];
		j++;
	}
	dest[i + j] = '\0';
	return (dest);
}
// #include <stdio.h>
// int main(){
// 	char arr1[15] = "Hello World!";
// 	char arr2[] = " by Caio!";
// 	char *ptr = arr1;
// 	unsigned int n = 20;
// 	ptr = ft_strncat(ptr, arr2, n);
// 	printf("Result: %s", ptr);
// }
