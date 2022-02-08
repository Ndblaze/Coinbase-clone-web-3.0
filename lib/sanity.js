import sanityClient from '@sanity/client';

export const client = sanityClient({
     projectId: 'peifw3wy',
     dataset: 'production',
     apiVersion: '2021-03-25',
     token: 'skQlixE7puVGi66fHvGnW5iazdZsnRKgj5LDlp4I6pW3jf38Z2z2ffjOv3HECazbMVk7iYH7eXlM6jaGtatIgpD1LS96qPskqtQCZVfkxlumo1cq69U16zNL4viTHjogDnpWHjmtWN3IRV7oEPh3bsRjI4VkAsvBXNFLdrvvlrhIR8kfDNAs',
     useCdn: false
});