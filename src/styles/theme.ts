import { MantineThemeOverride } from '@mantine/core';

const customTheme: MantineThemeOverride = {
  // Define your custom colors
  colors: {
    brand: [
      '#F0F8FF',
      '#D6E4FF',
      '#ADC8FF',
      '#84A9FF',
      '#6690FF',
      '#3366FF',
      '#254EDA',
      '#1939B7',
      '#102693',
      '#091A7A',
    ],
  },

  // Primary color for components
  primaryColor: 'brand',

  // Primary shade
  primaryShade: { light: 6, dark: 8 },

  // Custom font family
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',

  // Set up spacing units
  spacing: { xs: '8', sm: '12', md: '16', lg: '24', xl: '32' },

  // Define breakpoints for responsive design
  breakpoints: {
    xs: '500',
    sm: '768',
    md: '1024',
    lg: '1280',
    xl: '1440',
  },

  // Heading font sizes
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '32', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '28', lineHeight: '1.3', fontWeight: '600' },
      h3: { fontSize: '24', lineHeight: '1.35', fontWeight: '600' },
      h4: { fontSize: '20', lineHeight: '1.4', fontWeight: '500' },
      h5: { fontSize: '18', lineHeight: '1.45', fontWeight: '500' },
      h6: { fontSize: '16', lineHeight: '1.5', fontWeight: '400' },
    },
  },

  // Border radius for components
  radius: { xs: '4', sm: '6', md: '8', lg: '12', xl: '16' },

  // Control sizes for buttons, inputs, etc.
  components: {
    Button: {
      styles: (theme: any) => ({
        root: {
          borderRadius: theme.radius.md,
          padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
        },
      }),
    },
    // Add more component-specific styles here
  },
};

export default customTheme;
