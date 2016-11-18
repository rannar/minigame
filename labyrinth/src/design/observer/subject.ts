import Observer from './observer';
interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers(o: Observer);
}

export default Subject;
