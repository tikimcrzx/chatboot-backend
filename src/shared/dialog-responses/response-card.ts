export function card(
  title: string,
  subtitle: string,
  imageUri: string,
  button: string,
) {
  return {
    card: {
      title,
      subtitle,
      imageUri,
      butttons: [
        {
          text: button,
          postback: title,
        },
      ],
    },
    platfrom: 'FACEBOOK',
    sendAsMessage: true,
  };
}
