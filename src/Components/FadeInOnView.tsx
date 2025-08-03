import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    stagger?: boolean;
    delay?: number;
    duration?: number;
}

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export const FadeInOnView: React.FC<FadeInProps> = ({
    children,
    stagger = false,
    delay = 0,
    duration = 0.6,
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    if (stagger) {
        return (
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
            >
                {Array.isArray(children)
                    ? children.map((child, i) => (
                        <motion.div
                            key={i}
                            variants={childVariants}
                            transition={{ duration, delay }}
                        >
                            {child}
                        </motion.div>
                    ))
                    : children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
};
