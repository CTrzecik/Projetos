/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strstr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: marvin <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/09/07 14:11:56 by ctrzecik          #+#    #+#             */
/*   Updated: 2026/09/08 14:59:19 by marvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

char	*ft_strstr(char *str, char *to_find)
{
	int	i;
	int	j;

	if (to_find[0] == '\0')
		return (str);
	i = 0;
	while (str[i] != '\0')
	{
		j = 0;
		while (str[i + j] == to_find[j] && to_find[j] != '\0')
			j++;
		if (to_find[j] == '\0')
			return (&str[i]);
		i++;
	}
	return (NULL);
}

// int main() {
//   char myStr[1] = "caio haja adriano teste hoje amanda joao";
//   char find[] = "hoje";
// 	 printf("Full String: %s\n", myStr);
// 	 printf("To find: %s", find);
//   char *myPtr = ft_strstr(myStr, find);
// 	 printf("\n\nResult: %s", myPtr);
// }