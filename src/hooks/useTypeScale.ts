import { useState, useMemo } from 'react';

export interface ScaleRatio {
    name: string;
    value: number;
}

export const RATIOS: ScaleRatio[] = [
    { name: 'Minor Second', value: 1.067 },
    { name: 'Major Second', value: 1.125 },
    { name: 'Minor Third', value: 1.200 },
    { name: 'Major Third', value: 1.250 },
    { name: 'Perfect Fourth', value: 1.333 },
    { name: 'Augmented Fourth', value: 1.414 },
    { name: 'Perfect Fifth', value: 1.500 },
    { name: 'Golden Ratio', value: 1.618 },
];

export interface ScaleStep {
    label: string;
    px: number;
    rem: number;
}

export function useTypeScale() {
    const [baseSize, setBaseSize] = useState(16);
    const [ratio, setRatio] = useState(1.25);
    const [customRatio, setCustomRatio] = useState<string>('');
    const [steps, setSteps] = useState(6);
    const [downSteps, setDownSteps] = useState(2);
    const [roundValues, setRoundValues] = useState(false);

    const scale = useMemo(() => {
        const currentRatio = customRatio ? parseFloat(customRatio) || 1.25 : ratio;
        const sizes: ScaleStep[] = [];

        // sizes below base
        for (let i = downSteps; i > 0; i--) {
            let px = baseSize / Math.pow(currentRatio, i);
            if (roundValues) px = Math.round(px);

            sizes.push({
                label: `sm-${i}`,
                px: px,
                rem: px / 16
            });
        }

        // base
        sizes.push({
            label: 'base',
            px: roundValues ? Math.round(baseSize) : baseSize,
            rem: (roundValues ? Math.round(baseSize) : baseSize) / 16
        });

        // sizes above base
        for (let i = 1; i <= steps; i++) {
            let px = baseSize * Math.pow(currentRatio, i);
            if (roundValues) px = Math.round(px);

            sizes.push({
                label: `lg-${i}`,
                px: px,
                rem: px / 16
            });
        }

        return sizes;
    }, [baseSize, ratio, customRatio, steps, downSteps, roundValues]);

    const handleRatioClick = (r: number) => {
        setRatio(r);
        setCustomRatio('');
    };

    const currentRatioValue = customRatio ? parseFloat(customRatio) || ratio : ratio;

    return {
        baseSize,
        setBaseSize,
        ratio,
        setRatio,
        customRatio,
        setCustomRatio,
        steps,
        setSteps,
        downSteps,
        setDownSteps,
        roundValues,
        setRoundValues,
        scale,
        handleRatioClick,
        currentRatioValue
    };
}
