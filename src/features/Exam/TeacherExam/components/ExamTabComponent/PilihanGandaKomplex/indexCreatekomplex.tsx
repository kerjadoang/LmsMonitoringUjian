import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import {useState, useCallback, useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import ChevronDownBlue from '@assets/svg/ic24_chevron_down_blue.svg';
import {
  Uploader,
  Button,
  InputText,
  PopUp,
  PoppinsText,
  SoundPlayer,
} from '@components/atoms';
import {DocumentPickerResponse} from 'react-native-document-picker';
import Colors from '@constants/colors';
import {IcUpNew, ICDeleteNew} from '@assets/images';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import IconPlusWhite from '@assets/svg/ic_plus_white.svg';
import {StepperQuestion} from '@components/atoms/StepperQuestion';
import useCreateQuestion from '../BuatSoalSendiri/useCreateQuestion';
import {HtmlEditorTextArea} from '@components/organism/HtmlEditorTextArea';
import {AddImageProps} from '@components/organism/HtmlEditor/type';
import {
  dismissLoading,
  handlerOpenGallery,
  isImageFile,
  parseImagePath,
  showErrorToast,
  showLoading,
} from '@constants/functional';
import HtmlEditorPGAnswer from '@components/pages/UjianScreen/components/HtmlEditorPGAnswer';
import {useGetQuestionLevel, useGetQuestionType} from '@services/global';
import {ICreateSoalSendiriOptionPayload} from '@services/lms/type';
import ShockRobotIcon from '@assets/svg/maskot_3.svg';
import InputCorrectAnswer from '@components/pages/CreateQuestionTaskScreen/components/InputCorrectAnswer';
import InputQuestionLevel from '@components/pages/UjianScreen/components/InputQuestionLevel';
import {useGetDetailSoalNew} from '@services/lms';
import {ParamList} from 'type/screen';
import InputQuestionType from '@components/pages/UjianScreen/components/InputQuestionType';
import InputCorrectAnswerTest from './InputCorrectAnswerTest';
import Toast from 'react-native-toast-message';
import {useUploadFile} from '@services/media';
import {launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

const keys = ['A', 'B', 'C', 'D'];

export type InputType = {
  id: string;
  name: string;
};

const questionTypes: InputType[] = [
  {
    id: '1',
    name: 'Mengingat',
  },
  {
    id: '2',
    name: 'Memahami',
  },
  {
    id: '3',
    name: 'Menerapkan',
  },
  {
    id: '4',
    name: 'Menganalisis',
  },
  {
    id: '5',
    name: 'Mengevaluasi',
  },
  {
    id: '6',
    name: 'Menciptakan',
  },
];

const CreatePgKompleks = () => {
  const [showDeleteAlert, setShowDeleteAlert] = useState<{
    status: boolean;
    selectedKey: ICreateSoalSendiriOptionPayload;
  }>({status: false, selectedKey: {}});

  const [inputSwipeUpVisible, setInputSwipeUpVisible] =
    useState<boolean>(false);

  const [inputTest, setinputTest] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] =
    useState<ICreateSoalSendiriOptionPayload>();

  const [progressUpload, setProgressUpload] = useState<string>('0%');
  const [uploadFileData, setUploadFileData] = useState<{
    path_url?: string;
    type?: string;
    name?: string;
  }>({path_url: '', type: ''});

  const {mutate: uploadFile, data: dataUploadFile, loading} = useUploadFile();

  const [
    InputQuestionLevelSwipeUpVisible,
    setInputQuestionLevelSwipeUpVisible,
  ] = useState<boolean>(false);

  const [totalQuestion = 0, setValuee] = useState<number>(0);
  const onPress_stepper = () => setValuee(prevCount => prevCount + 1);

  const {currentQuestion = 1, _handlerStepper} = useCreateQuestion();

  const htmlUploadImage: () => Promise<AddImageProps> = async () => {
    let result: AddImageProps = {
      id: '',
      imageName: '',
      imageUrl: '',
      width: 150,
      height: 150,
    };
    try {
      showLoading();
      const resData = await handlerOpenGallery({
        type: 'paket_soal',
        sub_type: 'ujian',
      });
      result = {
        id: resData?.ID,
        imageName: resData?.original_name,
        imageUrl: resData?.path_url || '',
        width: 150,
        height: 150,
      };
    } catch (error) {
    } finally {
      dismissLoading();
      return result;
    }
  };

  const [InputQuestionTypeSwipeUpVisible, setInputQuestionTypeSwipeUpVisible] =
    useState<boolean>(false);

  const route = useRoute<RouteProp<ParamList, 'CreateSoalSendiriScreen'>>();

  const {question_id} = route.params;

  const {
    control,
    handleSubmit,
    watch,
    clearErrors,
    setValue,
    // setError,
    // reset,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      file_id: '',
      question: '',
      options: [
        {
          key: 'A',
          answer: '',
          is_correct: false,
          file_id: '',
          file_name: '',
          path_url: '',
        },
      ] as IBaseOption[],
      correct_answer: '' as any,
      marks: '' as any,
      question_level: '' as any,
      tags: '' as any,
      question_type: '' as any,
      discussion: {
        explanation: '',
        file_id: '',
        id: 0,
      },
    },
  });

  const {fields, append, remove} = useFieldArray({
    name: 'options',
    control: control,
  });
  const {data: questionTypeData} = useGetQuestionType();
  const {data: detailSoalData} = useGetDetailSoalNew(question_id);
  const {data: questionLevelData} = useGetQuestionLevel();
  const options = watch('options');
  const questionLevel = watch('question_level');
  const typeQuestion = watch('question_type');
  const isPG = typeQuestion?.id === 1;
  const isPGKomplek = typeQuestion?.id === 5;
  const isPilgan = isPG || isPGKomplek;
  const isEditMode = !!detailSoalData?.data;

  useEffect(() => {
    if (questionTypeData) {
      // setSelectedQuestionType(questionTypeData.data?.[0]);
      setValue('question_type', questionTypeData.data?.[0] ?? {});
    }
  }, [questionTypeData]);

  useEffect(() => {
    if (isEditMode) {
      let qLevel, qType;
      if (questionTypeData) {
        qType = questionTypeData?.data?.filter(
          type => type.id === detailSoalData?.data?.question_type_id,
        )[0];
      }

      if (questionLevelData) {
        qLevel = questionLevelData?.data?.filter(
          level => level.id === detailSoalData?.data?.question_level_id,
        )[0];
      }

      if (detailSoalData?.data?.file_id) {
        setUploadFileData(prevState => ({
          ...prevState,
          path_url: detailSoalData?.data?.path_url,
        }));
      }

      if (qType?.id === 1 || qType?.id === 5) {
        const correctAnswer = detailSoalData?.data?.options?.filter(
          option => option.is_correct,
        )[0]?.key;
        setValue(
          'options',
          detailSoalData?.data?.options ?? getValues('options'),
        );
        setValue('correct_answer', correctAnswer);
      }
      setValue('question_type', qType);
      setValue('question_level', qLevel);
      setValue('question', detailSoalData?.data?.question || '');
      setValue('marks', detailSoalData?.data?.marks?.toString());
      setValue('file_id', detailSoalData?.data?.file_id || '');
      setValue(
        'tags',
        questionTypes.find(
          questionType => questionType.name === detailSoalData?.data?.tag,
        ),
      );
      setValue('discussion', {
        explanation: detailSoalData?.data?.question_discuss?.explanation || '',
        file_id: detailSoalData?.data?.question_discuss?.file_id || '',
        id: detailSoalData?.data?.question_discuss?.id || 0,
      });
    }
  }, [isEditMode, questionLevelData, questionTypeData, detailSoalData]);

  const onSelectCorrectAnswer = (val: ICreateSoalSendiriOptionPayload) => {
    setValue('correct_answer', val?.key!);
    clearErrors('correct_answer');
    const optionIndex = getValues('options').findIndex(
      option => option?.key === val?.key,
    );
    setSelectedOption(val);
    if (optionIndex > -1) {
      const newData = [...getValues('options')];
      newData[optionIndex].is_correct = true;
      setValue('options', newData);
    }
    setInputSwipeUpVisible(false);
  };

  const onSelectCorrectAnswerTest = (val: ICreateSoalSendiriOptionPayload) => {
    setValue('correct_answer', val?.key!);
    clearErrors('correct_answer');
    const optionIndex = getValues('options').findIndex(
      option => option?.key === val?.key,
    );
    setSelectedOption(val);
    if (optionIndex > -1) {
      const newData = [...getValues('options')];
      newData[optionIndex].is_correct = true;
      setValue('options', newData);
    }
    setinputTest(false);
  };

  const onSelectQuestionType = (val: IBaseQuestionType) => {
    setValue('question_type', val);
    clearErrors('question_type');
    setInputQuestionTypeSwipeUpVisible(false);
  };

  const onSelectQuestionLevel = (val: IBaseQuestionLevel) => {
    setValue('question_level', val);
    clearErrors('question_level');
    setInputQuestionLevelSwipeUpVisible(false);
  };

  const onDeletePress = (val: ICreateSoalSendiriOptionPayload) => {
    if (fields.length > 1) {
      setShowDeleteAlert({status: true, selectedKey: val});
    }
  };

  const upload = (asset: DocumentPickerResponse) => {
    const formData = new FormData();
    formData.append('attachment', {
      name: asset?.name,
      type: asset?.type,
      uri:
        Platform.OS === 'android'
          ? asset?.uri
          : asset?.uri?.replace('file://', ''),
    });
    formData.append('type', 'kp_regular');
    formData.append('sub_type', 'learn');

    let i = 0;
    const intervalId = setInterval(() => {
      if (i >= 100) {
        clearInterval(intervalId);
      } else {
        setProgressUpload(`${i + 4}%`);
        i++;
      }
    }, 2000);

    uploadFile(formData)
      .then(res => {
        setValue('file_id', res.data?.ID ?? '');
      })
      .catch(() => {
        setUploadFileData({
          path_url: '',
          type: '',
        });
      })
      .finally(() => {
        setProgressUpload('0%');
        clearInterval(intervalId);
      });
  };

  const onRemoveFile = () => {
    setUploadFileData({path_url: '', type: ''});
    setValue('file_id', '');
  };

  const onUploadFile = async () => {
    try {
      const fileResult = await launchImageLibrary({
        mediaType: 'photo',
        presentationStyle: 'fullScreen',
      });

      setUploadFileData({
        type: fileResult?.assets?.[0]?.type,
        path_url: parseImagePath(fileResult?.assets?.[0]?.uri || ''),
      });

      if (
        fileResult?.assets?.[0]?.fileSize &&
        fileResult?.assets?.[0]?.fileSize > 104857600
      ) {
        Toast.show({
          type: 'error',
          text1: 'File tidak bisa melebihi 100MB',
        });
        setUploadFileData({
          path_url: '',
          type: '',
        });
        return;
      }

      upload({
        fileCopyUri: '',
        name: fileResult?.assets?.[0]?.fileName || '',
        size: fileResult?.assets?.[0]?.fileSize || 0,
        type: fileResult?.assets?.[0]?.type || '',
        uri: fileResult?.assets?.[0]?.uri || '',
      });
    } catch (e) {}
  };

  const onDeleteAnswer = () => {
    if (fields.length > 1) {
      const optionIndex = getValues('options').findIndex(
        option => option?.key === showDeleteAlert?.selectedKey?.key,
      );
      remove(optionIndex);

      const newData = [...getValues('options')];

      newData.forEach((data, index) => {
        data.key = keys[index];
      });
      setValue('options', newData);
      setShowDeleteAlert({status: false, selectedKey: {}});
    }
  };

  const [sound, setSound] = useState('');

  const AudioFilePertanyaan = async () => {
    try {
      const fileaudio = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      setSound(fileaudio.uri);
      setValue('file_id', fileaudio.uri);
    } catch (err) {}
  };

  const AudioFileOpsiJawaban = async (index: number, value: any) => {
    try {
      const fileaudio = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });

      updateOptions(index, {
        ...value,
        file_id: fileaudio.uri,
      });

      // setValue('file_id', fileaudio.uri)
    } catch (err) {}
  };

  const updateOptions = useCallback((optionIdx: number, value: IBaseOption) => {
    const newData = [...getValues('options')];
    const option = newData[optionIdx];
    newData[optionIdx].file_id = value.file_id ?? option.file_id;
    newData[optionIdx].file_name = value.file_name ?? option.file_name;
    newData[optionIdx].path_url = value.path_url ?? option.path_url;
    newData[optionIdx].answer = value.answer ?? option.answer;
    newData[optionIdx].is_correct = value.is_correct ?? option.is_correct;
    newData[optionIdx].key = value.key ?? option.key;

    setValue('options', newData);
  }, []);

  const [popUp, setPopUp] = useState(false);

  const onSubmit = (data: any) => {
    if (isPilgan && data.options.length === 1) {
      showErrorToast('Minimal 2 jawaban wajib ditambahkan.');
      return;
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}>
        <PoppinsText>Nama Paket Soal</PoppinsText>
        <InputText
          onChangeText={() => {}}
          backgroundColor={Colors.dark.neutral10}
          placeholder="Ujian Tengah Semester "
        />
        <View
          style={{
            marginBottom: 20,
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.buttonLeftPlus}
            onPress={onPress_stepper}>
            <IconPlusWhite width={14} height={14} />
          </TouchableOpacity>
          <StepperQuestion
            totalQuestion={totalQuestion}
            currentQuestion={currentQuestion}
            onPressQuestion={(data1: any) => {
              _handlerStepper(data1);
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <PoppinsText
              style={{
                backgroundColor: '#F5F7F9',
                borderRadius: 10,
                borderWidth: 1,
                fontFamily: 'Poppins-SemiBold',
                borderColor: '#fff',
                textAlign: 'center',
                color: '#000',
                marginRight: 10,
                paddingTop: 5,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              3{' '}
            </PoppinsText>
            <PoppinsText style={{color: '#0055B8', textAlign: 'center'}}>
              Soal 03.
            </PoppinsText>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                // onPress={toggleExpand}

                //   onPress = {() => {
                //     setExpanded(!expanded);
                // }}
                style={styles.itemTouchable}>
                <Image
                  source={IcUpNew}
                  style={{
                    marginLeft: 10,
                    backgroundColor: '#EFF7FF',
                    width: 28,
                    height: 28,
                    alignSelf: 'center',
                    marginVertical: 10,
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View style={{backgroundColor: Colors.white}}>
              <Button
                label="Simpan"
                action={handleSubmit(onSubmit)}
                // isDisabled={loadingCreateSoalSendiri}
                style={{paddingLeft: 30, paddingRight: 30}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'flex-end',
              }}>
              <Image source={ICDeleteNew} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Tipe Soal</PoppinsText>
            <InputText
              onChangeText={() => {}}
              disabled
              // value={capitalizeEachWord(value?.question_type)}
              onPress={() => setInputQuestionTypeSwipeUpVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              placeholder="Pilih Tipe Soal"
              rightIcon={ChevronDownBlue}
            />
          </View>
          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Bobot Nilai</PoppinsText>
            <InputText
              onChangeText={() => {}}
              disabled
              // value={capitalizeEachWord(value?.question_type)}
              // onPress={() => setInputQuestionTypeSwipeUpVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              placeholder="100"
              // rightIcon={ChevronDown}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tingkat Kesulitan</Text>
            <Controller
              control={control}
              name="question_level"
              rules={{required: 'Tingkat Kesulitan wajib dipilih.'}}
              render={({field: {value}}) => (
                <InputText
                  onChangeText={() => {}}
                  disabled
                  value={(value as any).name}
                  onPress={() => setInputQuestionLevelSwipeUpVisible(true)}
                  errorMessage={errors?.question_level?.message as any}
                  backgroundColor={Colors.dark.neutral10}
                  placeholder="Pilih Tingkat Kesulitan"
                  rightIcon={ChevronDownBlue}
                />
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <PoppinsText type="BoldPoppins">Pertanyaan</PoppinsText>
            <Controller
              control={control}
              name={'question'}
              rules={{required: 'Pertanyaan wajib diisi.'}}
              render={({field: {onChange, value}}) => {
                return (
                  <HtmlEditorTextArea
                    onChangeText={onChange}
                    placeholder="Tulis Pertanyaan di sini..."
                    value={value}
                    errorLabel={errors?.question?.message}
                    onPressAddImage={htmlUploadImage}
                  />
                );
              }}
            />
            {sound && <SoundPlayer source={sound} />}
            <TouchableOpacity
              style={styles.submitJawaban}
              onPress={AudioFilePertanyaan}>
              <PoppinsText
                style={{
                  color: Colors.primary.base,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                {' '}
                + Pilih Media{' '}
              </PoppinsText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.inputContainer}>
            <View>
              <PoppinsText type="BoldPoppins">Opsi Jawaban</PoppinsText>
              {isPGKomplek ? (
                <Text style={styles.subLabel}>*Centang Jawaban Benar</Text>
              ) : null}
            </View>
            <View style={{gap: 16}}>
              {fields?.map((field, index) => {
                return (
                  <Controller
                    key={field.id}
                    control={control}
                    rules={{
                      required: 'Jawaban wajib diisi.',
                      validate: () => {
                        if (isPG) {
                          return;
                        }
                        const validatePGKCorrectCount = fields.filter(
                          val => val.is_correct === true,
                        ).length;
                        if (validatePGKCorrectCount < 2) {
                          return 'Pilih minimal 2 jawaban benar.';
                        }
                      },
                    }}
                    name={`options.${index}.answer`}
                    render={({field: {onChange, value}}) => {
                      return (
                        <>
                          <HtmlEditorPGAnswer
                            // isKompleks={5}
                            // isChecked={field.is_correct}
                            onPressCheck={() => {
                              updateOptions(index, {
                                ...field,
                                answer: value,
                                is_correct: !field.is_correct,
                              });
                            }}
                            labelPrefix={field?.key}
                            placeholder="Tulis Jawaban di sini... dil"
                            onChangeText={onChange}
                            value={value}
                            errorLabel={
                              errors.options?.at?.(index)?.answer?.message
                            }
                            onRemoveInput={() => onDeletePress(field)}
                            onPressAddImage={htmlUploadImage}
                          />
                          {field.file_id && (
                            <SoundPlayer source={field.file_id} />
                          )}
                          <TouchableOpacity
                            style={styles.submitJawaban}
                            onPress={() => AudioFileOpsiJawaban(index, field)}>
                            <PoppinsText
                              style={{
                                color: Colors.primary.base,
                                fontFamily: 'Poppins-SemiBold',
                              }}>
                              {' '}
                              + Pilih Media{' '}
                            </PoppinsText>
                          </TouchableOpacity>
                        </>
                      );
                    }}
                  />
                );
              })}
              {fields.length < 4 && (
                <Button
                  label={'Tambah Opsi Jawaban'}
                  action={() =>
                    append({
                      key: keys[fields.length],
                      answer: '',
                      file_id: '',
                      is_correct: false,
                    })
                  }
                  background={Colors.white}
                  style={{
                    alignContent: 'center',
                    borderRadius: 9,
                    flex: 1,
                    borderColor: Colors.dark.neutral20,
                    borderWidth: 1,
                  }}
                  textStyle={{
                    color: Colors.primary.base,
                    fontFamily: 'Poppins-SemiBold',
                  }}
                />
              )}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <PoppinsText type="BoldPoppins">Jawaban Benar</PoppinsText>
            <Controller
              control={control}
              name="correct_answer"
              rules={{required: 'Jawaban benar wajib dipilih.'}}
              render={({field: {value}}) => (
                <>
                  <InputText
                    onChangeText={() => {}}
                    disabled
                    value={value}
                    errorMessage={errors?.correct_answer?.message as any}
                    // onPress={() => setInputSwipeUpVisible(true)}
                    onPress={() => setinputTest(true)}
                    backgroundColor={Colors.dark.neutral10}
                    placeholder="Pilih Jawaban Benar 1"
                    rightIcon={ChevronDownBlue}
                  />
                  <PoppinsText type="BoldPoppins">value = {value}</PoppinsText>
                </>
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <PoppinsText type="BoldPoppins">Pembahasan</PoppinsText>
            <Controller
              control={control}
              name={'discussion.explanation'}
              rules={{required: 'Pembahasan wajib diisi.'}}
              render={({field: {onChange, value}}) => {
                return (
                  <HtmlEditorTextArea
                    onChangeText={onChange}
                    placeholder="Tulis Pembahasan di sini..."
                    value={value}
                    errorLabel={errors?.discussion?.explanation?.message}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <InputQuestionType
        height={300}
        visible={InputQuestionTypeSwipeUpVisible}
        inputs={questionTypeData?.data}
        onClose={() => setInputQuestionTypeSwipeUpVisible(false)}
        onSelect={onSelectQuestionType}
        selectedOption={typeQuestion as IBaseQuestionType}
      />
      <InputCorrectAnswer
        height={300}
        visible={inputSwipeUpVisible}
        inputs={options}
        onClose={() => setInputSwipeUpVisible(false)}
        onSelect={onSelectCorrectAnswer}
        selectedOption={selectedOption}
        // setValue={setValue}
      />
      <InputCorrectAnswerTest
        // isKompleks={isPGKomplek}
        // isChecked={field.is_correct}
        height={300}
        visible={inputTest}
        inputs={options}
        onClose={() => setinputTest(false)}
        onSelect={onSelectCorrectAnswerTest}
        selectedOption={selectedOption}
        // setValue={setValue}
      />
      <InputQuestionLevel
        height={300}
        visible={InputQuestionLevelSwipeUpVisible}
        inputs={questionLevelData?.data}
        onClose={() => setInputQuestionLevelSwipeUpVisible(false)}
        onSelect={onSelectQuestionLevel}
        selectedOption={questionLevel as IBaseQuestionLevel}
        // setValue={setValue}
      />
      <PopUp
        show={showDeleteAlert.status}
        close={() => setShowDeleteAlert({status: false, selectedKey: {}})}
        title="Hapus Jawaban"
        desc={`Apakah Anda yakin untuk menghapus jawaban ${showDeleteAlert.selectedKey.key} ?`}
        Icon={ShockRobotIcon}
        titleCancel="Hapus"
        titleConfirm="Batal"
        actionCancel={onDeleteAnswer}
        actionConfirm={() =>
          setShowDeleteAlert({status: false, selectedKey: {}})
        }
      />

      <PopUp
        show={popUp}
        close={() => setPopUp(false)}
        desc={
          <Uploader
            onRemoveFile={onRemoveFile}
            fileName={dataUploadFile?.data?.file_name}
            progressUpload={progressUpload}
            isUploading={loading}
            isImageFormat={isImageFile(uploadFileData.path_url)}
            path_url={uploadFileData.path_url}
            onUpload={onUploadFile}
            formatType={
              '.3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma'
            }
          />
        }
        titleConfirm={'OK'}
        actionConfirm={() => setPopUp(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.dark.neutral100,
  },
  subLabel: {
    fontFamily: 'Poppins-Regular',
    color: Colors.dark.neutral60,
    fontSize: 12,
  },
  inputContainer: {
    gap: 8,
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: 10,
  },

  radioInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemTouchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonLeftPlus: {
    backgroundColor: Colors.primary.light1,
    borderRadius: 10,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  buttonSimpan: {
    backgroundColor: '#007BE0',
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#E7EBEE',
    borderWidth: 1,
    elevation: 3,
  },
  submitJawaban: {
    width: 150,
    textAlign: 'center',
    color: Colors.primary.base,
    fontSize: 14,
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: Colors.primary.light3,
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: 'Poppins-SemiBold',
    borderColor: '#fff',
  },
});

export default CreatePgKompleks;
