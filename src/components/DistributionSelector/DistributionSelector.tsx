import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { SelectItem } from 'primereact/api';
import mapValues from 'lodash/mapValues';
import isEqual from 'lodash/isEqual';

import { Distribution, DistributionType, distributionTypesSelectItems } from '../../utils/distribution';

export interface DistributionSelectorProps {

    value?: Distribution;

    onChange(value?: Distribution): void;
}

interface DistributionSelectorState {

    distributionType?: DistributionType;
    distributionParams: { [key: string]: string | undefined };
}

export class DistributionSelector extends React.Component<DistributionSelectorProps, DistributionSelectorState> {

    state: DistributionSelectorState = { distributionParams: {} };

    componentDidUpdate(
        prevProps: Readonly<DistributionSelectorProps>,
        prevState: Readonly<DistributionSelectorState>,
        snapshot?: any
    ) {
        if (!isEqual(this.props.value, prevProps.value)) {
            this.setState({
                ...this.state,

                distributionType: this.props.value?.type,
                distributionParams: mapValues(this.props.value?.params ?? {}, String)
            });
        }

        if (!isEqual(this.state, prevState)) {
            this.onDistributionChange();
        }
    }

    private onDistributionTypeChange(value: SelectItem) {
        this.setState({
            ...this.state,

            distributionType: value.value as DistributionType
        });
    }

    private onDistributionParamChange(param: string, event: React.FormEvent<HTMLInputElement>) {
        if (this.state.distributionParams) {
            this.setState({
                ...this.state,

                distributionParams: {
                    ...this.state.distributionParams,

                    [param]: event.currentTarget.value
                }
            });
        }
    }

    private onDistributionChange() {
        const { distributionType, distributionParams } = this.state;

        let newDistribution: Distribution | undefined;
        const numericParams = mapValues(distributionParams, Number);
        switch (distributionType) {
            case DistributionType.BERNOULLI:
                if (!isNaN(numericParams['p'])) {
                    newDistribution = {
                        type: distributionType,
                        params: { p: numericParams['p'] }
                    }
                }
                break;

            case DistributionType.BINOMIAL:
                if (!isNaN(numericParams['n']) && !isNaN(numericParams['p'])) {
                    newDistribution = {
                        type: distributionType,
                        params: {
                            n: numericParams['n'],
                            p: numericParams['p']
                        }
                    }
                }
                break;

            case DistributionType.GEOMETRIC:
                if (!isNaN(numericParams['p'])) {
                    newDistribution = {
                        type: distributionType,
                        params: { p: numericParams['p'] }
                    }
                }
                break;

            case DistributionType.POISSON:
                if (!isNaN(numericParams['l'])) {
                    newDistribution = {
                        type: distributionType,
                        params: { l: numericParams['l'] }
                    }
                }
                break;

            case DistributionType.UNIFORM:
                if (!isNaN(numericParams['a']) && !isNaN(numericParams['b'])) {
                    newDistribution = {
                        type: distributionType,
                        params: {
                            a: numericParams['a'],
                            b: numericParams['b']
                        }
                    }
                }
                break;

            case DistributionType.EXPONENTIAL:
                if (!isNaN(numericParams['l'])) {
                    newDistribution = {
                        type: distributionType,
                        params: { l: numericParams['l'] }
                    }
                }
                break;

            case DistributionType.NORMAL:
                if (!isNaN(numericParams['a']) && !isNaN(numericParams['d'])) {
                    newDistribution = {
                        type: distributionType,
                        params: {
                            a: numericParams['a'],
                            d: numericParams['d']
                        }
                    }
                }
                break;
        }

        this.props.onChange(newDistribution);
    }

    render() {
        const { distributionType, distributionParams } = this.state;

        const params: { name: string, field: string }[] = [];
        switch (distributionType) {
            case DistributionType.BERNOULLI:
                params.push({ name: 'p', field: 'p'});
                break;

            case DistributionType.BINOMIAL:
                params.push({ name: 'n', field: 'n'});
                params.push({ name: 'p', field: 'p'});
                break;

            case DistributionType.GEOMETRIC:
                params.push({ name: 'p', field: 'p'});
                break;

            case DistributionType.POISSON:
                params.push({ name: '\u03BB', field: 'l'});
                break;

            case DistributionType.UNIFORM:
                params.push({ name: 'a', field: 'a'});
                params.push({ name: 'b', field: 'b'});
                break;

            case DistributionType.EXPONENTIAL:
                params.push({ name: '\u03BB', field: 'l'});
                break;

            case DistributionType.NORMAL:
                params.push({ name: 'a', field: 'a'});
                params.push({ name: '\u03C3\u00B2', field: 'd'});
                break;
        }

        const paramsComponents: JSX.Element[] = params
            .map(param => (
                <React.Fragment key={param.name}>
                    <strong>{param.name}</strong> =
                    <InputText value={distributionParams ? distributionParams[param.field] ?? '' : ''}
                               onChange={e => this.onDistributionParamChange(param.field, e)} /><br />
                </React.Fragment>
            ));

        return (
            <>
                Распределение: <Dropdown value={this.state.distributionType} options={distributionTypesSelectItems}
                                         onChange={this.onDistributionTypeChange.bind(this)} /><br />

                {paramsComponents}
            </>
        );
    }
}
