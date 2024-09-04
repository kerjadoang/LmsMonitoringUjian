import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {ParamList} from 'type/screen';
import {useForm} from 'react-hook-form';

const arr: any = [];
let arrStepper: any = [];

const useCreateQuestionKp = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'CreateQuestionTaskScreen'>>();
  const route = useRoute<RouteProp<ParamList, 'CreateQuestionTaskScreen'>>();
  const totalQuestionDataRoute: any = route?.params?.totalQuestion;
  const [filledArr, setFilledArr] = useState<any>([]);
  const [totalQuestion, setTotalQuestion] = useState<number>(
    totalQuestionDataRoute,
  );
  const taskParams = route?.params?.taskParams;
  const [questionsDataByNumber, setQuestionsDataByNumber] = useState<any>(null);

  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const essayState = arr;

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    clearErrors,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      number: questionsDataByNumber?.number ?? 1,
      image_id: questionsDataByNumber?.image_id ?? '',
      question: questionsDataByNumber?.question ?? '',
      choice: [
        {
          key: 'A',
          description: '',
          correct: false,
        },
      ] as IBaseOption[],
      answer: questionsDataByNumber?.answer ?? ('' as any),
      marks: questionsDataByNumber?.value ?? ('' as any),
      question_level: '' as any,
      tags: '' as any,
      type: questionsDataByNumber?.type ?? ('pilihan ganda' as any),
      discussion: {
        explanation: '',
        file_id: '',
      },
    },
  });

  const [_, setUploadFileData] = useState<{
    path_url?: string;
    type?: string;
    name?: string;
  }>({path_url: '', type: ''});

  const _handlerStepper = (text: any) => {
    const isMessageFilled =
      essayState[currentQuestion - 1]?.user_input?.length > 0;
    const isNextButton = text === 'next';
    const isPreviousButton = text === 'previous';

    if (!arrStepper.includes(currentQuestion - 1)) {
      if (isMessageFilled) {
        arrStepper.push(...filledArr, currentQuestion - 1);
      } else {
        arrStepper = filledArr.filter?.(
          (idx: number) => idx !== currentQuestion - 1,
        );
      }
    } else if (!isMessageFilled) {
      arrStepper = filledArr.filter?.(
        (idx: number) => idx !== currentQuestion - 1,
      );
    }
    setFocus('question');

    if (Object.keys(errors).length === 0) {
      resetState();
      setCurrentQuestion(
        isNextButton
          ? currentQuestion + 1
          : isPreviousButton
          ? currentQuestion - 1
          : text,
      );
      setFilledArr(arrStepper);
    }
  };

  const resetState = () => {
    setQuestionsDataByNumber(null);
    setValue('answer', '');
    setValue('image_id', '');
    setValue('question', '');
    setValue('type', {
      id: 1,
      question_type: 'pilihan ganda',
    });
    setUploadFileData({
      path_url: '',
      type: '',
    });
    setValue('choice', [
      {
        key: 'A',
        description: '',
        correct: false,
      },
    ] as IBaseOption[]);
    setValue('marks', '');
    clearErrors('question');
    clearErrors('choice');
    clearErrors('answer');
    clearErrors('marks');
  };

  const validateData = () => {
    if (getValues('type').question_type === 'pilihan ganda') {
      if (
        getValues('choice').length < 2 ||
        getValues('answer') === '' ||
        getValues('marks') === '' ||
        getValues('marks') > 100
      ) {
        return false;
      }
    } else {
      if (
        getValues('question') === '' ||
        getValues('marks') === '' ||
        getValues('marks') > 100
      ) {
        return false;
      }
    }
    return true;
  };

  const _handlerAddStepper = () => {
    if (validateData()) {
      setTotalQuestion((prev: any) => prev + 1);
    }
  };

  return {
    navigation,
    totalQuestion,
    setTotalQuestion,
    currentQuestion,
    setCurrentQuestion,
    _handlerStepper,
    filledArr,
    _handlerAddStepper,

    //hook form
    control,
    handleSubmit,
    getValues,
    setValue,
    errors,

    //form

    //upload

    watch,
    taskParams,
  };
};

export default useCreateQuestionKp;
