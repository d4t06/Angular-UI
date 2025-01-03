import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { VariantProps, cva } from "class-variance-authority";

const classes = {
  active: "before:shadow-none font-[500] translate-y-[2px] text-[#cd1818]",
  button: "inline-flex relative  items-center justify-center z-0",
};

const ButtonVariant = cva(classes.button, {
  variants: {
    variant: {
      primary:
        "before:content-[''] before:absolute before:z-[-1] before:inset-0 before:rounded-[8px] rounded-[8px]  active:translate-y-[2px] active:before:shadow-none",
      clear: "",
    },
    size: {
      clear: "",
      primary: "px-[15px] py-[5px]",
    },
    colors: {
      primary:
        "before:border-[#a00000] text-[#fff] bg-[#cd1818] before:shadow-[0_2px_0_#a00000]",
      second:
        "before:border-[#ccc] text-[#333] bg-[#f6f6f6] before:shadow-[0_2px_0_#ccc]",
      third:
        "before:border-[#a00000] bg-[#fff] text-[#000] before:shadow-[0_2px_0_#a00000]",
      four: "text-amber-100 before:bg-amber-800 before:border-[#78350f] before:shadow-[0_2px_0_#78350f]",

      clear: "",
    },
    border: {
      primary: "before:border-[2px]",
      thin: "before:border-[1px]",
      clear: "before:border-b-[2px]",
    },
    fontWeight: {
      primary: "font-[500]",
      thin: "",
    },
  },
  defaultVariants: {
    size: "primary",
    colors: "primary",
    variant: "primary",
    border: "primary",
    fontWeight: "primary",
  },
});

interface Props extends VariantProps<typeof ButtonVariant> {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: HTMLButtonElement["type"];
  href?: string;
  active?: boolean;
}

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule, RouterLink, NgTemplateOutlet],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() active?: boolean;
  @Input() border?: Props["border"];
  @Input() className?: Props["className"];
  @Input() colors?: Props["colors"];
  @Input() disabled?: Props["disabled"];
  @Input() fontWeight?: Props["fontWeight"];
  @Input() loading?: Props["loading"];
  @Input() variant?: Props["variant"];
  @Input() size?: Props["size"];
  @Input() href?: string;

  @Output() myClick = new EventEmitter<void>();

  onClick() {
    this.myClick.emit();
  }

  ButtonVariant = ButtonVariant;
}
