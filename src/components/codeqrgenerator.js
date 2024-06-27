import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeGenerator = ({ data, size = 128, bgColor = "#ffffff", fgColor = "#000000", level = "L", includeMargin = false }) => {
    const svgRef = useRef(null);

    const handleDownload = () => {
        const svg = svgRef.current.querySelector('svg');
        if (svg) {
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(svg);
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'qrcode.svg';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        <div ref={svgRef}>
            <QRCodeSVG
                value={data}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                level={level}
                includeMargin={includeMargin}
                imageSettings={{
                    src: "https://static.zpao.com/favicon.png",
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                }}
            />
            <div>
                <button onClick={handleDownload}>Descargar SVG</button>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
