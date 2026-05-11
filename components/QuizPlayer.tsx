"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ShareButtons } from "@/components/ShareButtons";
import { scoreQuiz } from "@/lib/quiz";
import type { Quiz } from "@/lib/types";

type QuizPlayerProps = {
  quiz: Quiz;
  quizUrl: string;
};

export function QuizPlayer({ quiz, quizUrl }: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const currentQuestion = quiz.questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentQuestion?.id || ""];
  const progress = isComplete
    ? 100
    : Math.round((currentIndex / quiz.questions.length) * 100);

  const result = useMemo(
    () => (isComplete ? scoreQuiz(quiz, selectedAnswers) : null),
    [isComplete, quiz, selectedAnswers]
  );

  function chooseAnswer(answerId: string) {
    setSelectedAnswers((answers) => ({
      ...answers,
      [currentQuestion.id]: answerId
    }));
  }

  function goNext() {
    if (currentIndex + 1 >= quiz.questions.length) {
      setIsComplete(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
  }

  if (isComplete && result) {
    const resultPath = `/quizzes/${quiz.slug}/results/${result.slug}`;

    return (
      <div className="quiz-player">
        <NewsletterSignup />
        <AdSlot variant="pre-results" />
        <section className="result-card">
          <p className="eyebrow">Your result</p>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          <p className="share-summary">{result.shareSummary}</p>
          <div className="button-row">
            <Link className="button primary" href={resultPath}>
              Open shareable result
            </Link>
            <Link className="button secondary" href="/quizzes">
              Take another quiz
            </Link>
          </div>
          <ShareButtons
            url={resultPath}
            title={result.title}
            description={result.shareSummary}
            resultMode
            stickyMobile
          />
        </section>
      </div>
    );
  }

  return (
    <section className="quiz-player" aria-labelledby="active-question">
      <div className="progress-wrap" aria-label={`Question ${currentIndex + 1} of ${quiz.questions.length}`}>
        <div className="progress-meta">
          <span>Question {currentIndex + 1} of {quiz.questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {currentIndex === 3 ? <AdSlot variant="mid-quiz" /> : null}

      <div className="question-card">
        <h2 id="active-question">{currentQuestion.text}</h2>
        <div className="answer-list">
          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              className={selectedAnswer === answer.id ? "answer selected" : "answer"}
              type="button"
              onClick={() => chooseAnswer(answer.id)}
            >
              {answer.text}
            </button>
          ))}
        </div>
        <button
          className="button primary next-button"
          type="button"
          disabled={!selectedAnswer}
          onClick={goNext}
        >
          {currentIndex + 1 === quiz.questions.length ? "See my result" : "Next question"}
        </button>
      </div>

      <ShareButtons
        url={quizUrl}
        title={quiz.facebookShareTitle}
        description={quiz.facebookShareDescription}
      />
    </section>
  );
}
