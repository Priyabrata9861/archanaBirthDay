'use client';

import React, { useRef } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import '../archanaBirthDay/archanaBirthDay.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Rashmi from "../archanaBirthDay/rashmi.jpg";
import Cake from "../archanaBirthDay/cake.avif";

function ArchanaBirthDay() {
    const audioRef = useRef(null);
    const router = useRouter();

    const handleCelebrateClick = () => {
        router.push('/birthDayGate');
    };

    return (
        <div className="birthday-bg">
            <Confetti numberOfPieces={250} recycle={true} width={1500} height={700} />
            <audio ref={audioRef} src="/archanaBirthDay/SaudeBazi.mp3" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Card className="birthday-card">
                        <Card.Body>
                            <Image
                                src={Rashmi}
                                alt="Rashmi"
                                className="birthday-photo"
                                width={200}
                                height={200}
                                priority
                            />
                            <Card.Title className="birthday-title">
                                🎂 Happy Birthday Sibani! 🎉
                            </Card.Title>

                            <Card.Text className="birthday-text">
                                Wishing you a day filled with love, laughter, cake, and unforgettable memories! 💖
                            </Card.Text>

                            <div className="cake-container">
                                <Image
                                    src={Cake}
                                    alt="Birthday Cake"
                                    className="birthday-cake"
                                    width={100}
                                    height={100}
                                />
                            </div>

                            <Button
                                variant="warning"
                                size="lg"
                                className="birthday-button"
                                onClick={handleCelebrateClick}
                            >
                                🎁 Celebrate Your Birthday
                            </Button>
                        </Card.Body>
                    </Card>
                </motion.div>
            </Container>
        </div>
    );
}

export default ArchanaBirthDay;
