import { Pressable, PressableProps, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface ButtonProps extends PressableProps {
  style?: any;
  children?: React.ReactNode;
  variant?: "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "lg" | "icon";
  disabled?: boolean;
}

export default function Button({
  children,
  variant,
  size,
  disabled = false,
  ...props
}: ButtonProps) {
  styles.useVariants({
    variant,
    size,
    disabled,
  });

  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => {
  return {
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.calc(1),
      borderRadius: theme.calc(1),
      paddingVertical: theme.calc(1),
      variants: {
        variant: {
          default: {
            backgroundColor: theme.colors.primary,
          },
          destructive: {
            backgroundColor: theme.colors.destructive,
          },
          outline: {
            backgroundColor: theme.colors.background,
            borderWidth: 1,
            borderColor: theme.colors.input,
          },
          secondary: {
            backgroundColor: theme.colors.secondary,
          },
          ghost: {
            backgroundColor: "transparent",
          },
          link: {
            backgroundColor: "transparent",
            textDecorationLine: "underline",
          },
        },
        size: {
          default: {
            height: theme.calc(5),
            paddingHorizontal: 16,
          },
          sm: {
            height: theme.calc(4),
            paddingHorizontal: 12,
            borderRadius: 6,
          },
          lg: {
            height: theme.calc(5),
            paddingHorizontal: 32,
            borderRadius: 6,
          },
          icon: {
            height: theme.calc(4),
            width: theme.calc(4),
            padding: 8,
          },
        },
        disabled: {
          true: {
            opacity: 0.5,
            pointerEvents: "none",
          },
        },
      },
    },
    text: {
      fontSize: 14,
      fontWeight: "500",
      variants: {
        variant: {
          default: {
            color: theme.colors.primaryForeground,
          },
          destructive: {
            color: theme.colors.destructiveForeground,
          },
          outline: {
            color: theme.colors.foreground,
          },
          secondary: {
            color: theme.colors.secondaryForeground,
          },
          ghost: {
            color: theme.colors.foreground,
          },
          link: {
            color: theme.colors.primary,
          },
        },
      },
    },
  };
});
