
"use client";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import * as React from "react";
import {cn} from "@/utils/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
Avatar.displayName = "Avatar";

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    onLoadingStatusChange?: (status: "loading" | "loaded" | "error") => void;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
    ({ className, src, alt = "", onLoadingStatusChange, ...props }, ref) => {
        const [status, setStatus] = React.useState<"loading" | "loaded" | "error">(
            "loading"
        );

        React.useEffect(() => {
            if (!src) {
                setStatus("error");
                onLoadingStatusChange?.("error");
                return;
            }

            setStatus("loading");
            onLoadingStatusChange?.("loading");
        }, [src, onLoadingStatusChange]);

        return (
            <Transition
                as={Fragment}
                show={status === "loaded"}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <img
                    ref={ref}
                    src={src}
                    alt={alt}
                    className={cn("aspect-square h-full w-full object-cover", className)}
                    onLoad={() => {
                        setStatus("loaded");
                        onLoadingStatusChange?.("loaded");
                    }}
                    onError={() => {
                        setStatus("error");
                        onLoadingStatusChange?.("error");
                    }}
                    {...props}
                />
            </Transition>
        );
    }
);
AvatarImage.displayName = "AvatarImage";

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
    delayMs?: number;
}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
    ({ className, delayMs = 600, children, ...props }, ref) => {
        const [isShown, setIsShown] = React.useState(false);

        React.useEffect(() => {
            const timeout = setTimeout(() => {
                setIsShown(true);
            }, delayMs);

            return () => clearTimeout(timeout);
        }, [delayMs]);

        return (
            <Transition
                as={Fragment}
                show={isShown}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    ref={ref}
                    className={cn(
                        "flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </Transition>
        );
    }
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };