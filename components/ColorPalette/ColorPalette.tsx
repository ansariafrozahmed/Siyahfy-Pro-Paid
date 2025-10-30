// app/components/ColorPallete.tsx (Server Component)

interface ColorPalleteProps {
  colorPallete: {
    background?: String;
    primary?: String;
    primaryText?: String;
    secondary?: String;
    heading?: String;
    text?: String;
  };
}

const ColorPallete: React.FC<ColorPalleteProps> = ({ colorPallete }) => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --template-background: ${colorPallete?.background || "#ffffff"};
            --template-primary: ${colorPallete?.primary || "#171615"};
            --template-primaryText: ${colorPallete?.primaryText || "#fff"};
            --template-secondary: ${colorPallete?.secondary || "#2d6a4f"};
            --template-heading: ${colorPallete?.heading || "#1b4332"};
            --template-text: ${colorPallete?.text || "#262626"};
          }
        `,
      }}
    />
  );
};

export default ColorPallete;
