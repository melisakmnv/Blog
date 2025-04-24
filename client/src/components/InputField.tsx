import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface FieldProps {
    label: string;
    name: string;
    placeholder: string;
    textarea?: boolean;
    quill?: boolean;
    control: any;
    direction?: "row" | "col";
}

export const InputField = ({ label, name, placeholder, textarea = false, quill = false, control, direction = "row" }: FieldProps) => {

    const renderInput = (field: any) => {
        if (quill) {
            return (
                <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                    // style={{ height: "450px" }}
                    className="min-h-[200px] h-[300px] sm:h-[400px] md:h-[450px]"
                />
            );
        }

        if (textarea) {
            return <Textarea className="resize-none h-10 overflow-y-auto placeholder:italic placeholder:text-[12px]" rows={4} placeholder={placeholder} {...field} />;
        }

        return <Input className="placeholder:italic placeholder:text-[12px]" placeholder={placeholder} {...field} />;
    };

    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem className={quill ? "h-[500px]" : ""}>
                    {direction === "col" ? (
                        <>
                            <FormLabel>{label}</FormLabel>
                            <FormControl>{renderInput(field)}</FormControl>
                            <FormMessage />
                        </>
                    ) : (
                        <div className="flex items-start gap-6">
                            <div className="w-40 pt-2">
                                <FormLabel>{label}</FormLabel>
                            </div>
                            <div className="flex-1 space-y-1">
                                <FormControl>{renderInput(field)}</FormControl>
                                <FormMessage />
                            </div>
                        </div>
                    )}
                </FormItem>
            )}
        />
    );
};
