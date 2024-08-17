import React, {  useRef, useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';
import { ThankYouCardProps } from "../lib/@types";


const ThankYouCard: React.FC<ThankYouCardProps> = ({ image, userName, setStep }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [downloadInitiated, setDownloadInitiated] = useState(false);

    const downloadCard = async () => {
        if (cardRef.current) {
            await new Promise((resolve) => setTimeout(resolve, 100));

            const cardElement = cardRef.current;
            const canvas = await html2canvas(cardElement, {
                useCORS: true,
            });

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'thank-you-card.png';
            link.click();

            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 },
            });

            setDownloadInitiated(true);
        }
    };

    const handleContinue = () => {
        setStep(1);
        window.location.reload();
    };

    return (
        <div className="flex flex-col  justify-center items-center min-h-screen">
            <motion.div
                ref={cardRef}
                className="relative w-[80%] h-0 pb-[125%] mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={image}
                    alt="Selected"
                    className="absolute w-full h-full object-cover rounded-none shadow-2xl"
                />
                <div className="absolute top-10 left-0 right-0 text-center text-white text-5xl font-bold" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>
                    Thank You
                </div>
                <div className="absolute bottom-10 left-0 right-0 text-center text-white text-5xl font-bold" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>
                    {userName}
                </div>
            </motion.div>
            <motion.button
                onClick={downloadCard}
                className="bg-purple-500 mt-10 text-white p-4 rounded-md text-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Download Card 🎁
            </motion.button>
            {downloadInitiated && (
                <motion.button
                    onClick={handleContinue}
                    className="bg-green-500 mt-5 text-white p-4 rounded-md text-2xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Over
                </motion.button>
            )}
        </div>
    );
};

export default ThankYouCard;
