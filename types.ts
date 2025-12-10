export interface ComboItem {
    name: string;
    description: string;
}

export interface DaySchedule {
    day: string;
    focus: string;
    detail: string;
    color: string;
    borderColor: string;
}

export interface TrainingPhase {
    day: string;
    focus: string;
    exercise: string;
    tactic: string;
    colorClass: string;
}
